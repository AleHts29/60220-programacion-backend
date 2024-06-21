import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import FirstMiddleware from './middleware/middleware-test';
import { ConfigModule, ConfigService } from '@nestjs/config';

// @Module({
//   // Son utilizados para obtener los módulos que requerimos como dependencias.
//   imports: [UserModule, MongooseModule.forRoot('mongodb://localhost:27017/clase43-nestjs?retryWrites=true&w=majority')],

//   // Podemos entenderlo como los controladores que ya conocemos dentro del mundo de Express. Éstos consumirán los servicios que viajan desde los providers. La diferencia está en la función que cumple cada uno.
//   controllers: [AppController],

//   // Contienen la verdadera definición de lo que se declara por los controllers, es decir, contiene las operaciones reales que tienen el funcionamiento interno de la operación.
//   providers: [AppService],
// })


// Trabajando con variables de Entorno
@Module({
  // Son utilizados para obtener los módulos que requerimos como dependencias.
  imports: [UserModule, ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URL')
      })
    })],

  // Podemos entenderlo como los controladores que ya conocemos dentro del mundo de Express. Éstos consumirán los servicios que viajan desde los providers. La diferencia está en la función que cumple cada uno.
  controllers: [AppController],

  // Contienen la verdadera definición de lo que se declara por los controllers, es decir, contiene las operaciones reales que tienen el funcionamiento interno de la operación.
  providers: [AppService],
})

// Middleware a nivel de aplicacion
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirstMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
