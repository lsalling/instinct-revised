import {Module} from '@nestjs/common';
import {UserModule} from '@instinct-prj/user-api';
import {SessionModule} from '@instinct-prj/session-api';
import {DatabaseModule} from '@instinct-prj/database-api';
import {ValidatorModule} from '@instinct-prj/validator-api';
import {ManageUsersController} from './manage-users.controller';

@Module({
  imports: [DatabaseModule, UserModule, ValidatorModule, SessionModule],
  controllers: [ManageUsersController],
})
export class ManageUsersModule {}
