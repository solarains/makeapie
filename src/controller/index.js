const Base = require('./base.js');
const superagent = require('superagent');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }

  async runAction() {
    let pageNo = 0;
    try {
      const res = await superagent.post(`https://www.makeapie.com/chart/list?builtinTags%5B%5D=category-work&sortBy=rank&pageSize=32&pageNumber=${pageNo++}&author=all`);
      return this.success(res);
    } catch (err) {
      console.error(err);
    }
  }
};
