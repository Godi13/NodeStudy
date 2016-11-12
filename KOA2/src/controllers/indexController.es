'use strict';
import indexModel from '../models/indexModel';
const indexController = {
  index() {
    return async(ctx, next) => {
      ctx.body = await ctx.render('index', {
        title: "点赞练习"
      });
    }
  },
  getData(ctx) {
    return async(ctx, next) => {
      ctx.body = await indexModel.data(ctx.query.num);
    }
  }
};
export default indexController;
