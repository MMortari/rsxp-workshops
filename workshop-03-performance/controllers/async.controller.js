const UserModel = require('../models/user.model');
const CompanyModel = require('../models/company.model');

class AsyncController {

  async sequencialRequests(ctx) {
    try {
      console.time('sequencial');
      const companies = await CompanyModel.find().limit(20).lean();
      const users = await UserModel.find().limit(20).lean();
      console.timeEnd('sequencial');
      ctx.body = { companies, users };
    } catch (error) {
      ctx.status = 500;
      ctx.body = error.message || error;
    }
  }

  async parallelRequests(ctx) {
    try {
      console.time('parallel');
      const [users, companies] = await Promise.all([
        UserModel.find().limit(20).lean(),
        CompanyModel.find().limit(20).lean()
      ]);
      console.timeEnd('parallel');
      ctx.body = { companies, users };
    } catch (error) {
      ctx.status = 500;
      ctx.body = error.message || error;
    }
  }

}

module.exports = new AsyncController();
