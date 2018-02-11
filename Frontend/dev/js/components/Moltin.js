import { gateway as MoltinGateway } from '@moltin/sdk';
import config from '../config'

console.log('config=', config);

const Moltin = MoltinGateway({
  client_id: config.moltenClientId
});

export default Moltin
