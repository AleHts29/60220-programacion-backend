import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  // Son utilizados para obtener los módulos que requerimos como dependencias.
  imports: [UserModule],

  // Podemos entenderlo como los controladores que ya conocemos dentro del mundo de Express. Éstos consumirán los servicios que viajan desde los providers. La diferencia está en la función que cumple cada uno.
  controllers: [AppController],

  // Contienen la verdadera definición de lo que se declara por los controllers, es decir, contiene las operaciones reales que tienen el funcionamiento interno de la operación.
  providers: [AppService],
})
export class AppModule {}
