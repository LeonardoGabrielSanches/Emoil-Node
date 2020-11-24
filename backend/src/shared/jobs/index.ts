import cron from 'node-cron';
import { container } from 'tsyringe';

import SendMailService from '../../modules/Users/services/SendMailService';

cron.schedule('* * * * *', async () => {
  const sendMail = container.resolve(SendMailService);
  await sendMail.execute();
});
