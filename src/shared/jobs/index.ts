import cron from 'node-cron';
import { container } from 'tsyringe';

import SendMailService from '../../modules/Users/services/SendMailService';

cron.schedule('0 0 0 * * *', async () => {
  const sendMail = container.resolve(SendMailService);
  await sendMail.execute();
});
