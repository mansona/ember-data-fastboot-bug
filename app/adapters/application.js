import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://emberjs.com',
  urlForFindAll(modelName) {
    const path = this.pathForType(modelName);
    return `${this.host}/data/${path}/all.json`;
  },

  urlForFindRecord(id, modelName) {
    const path = this.pathForType(modelName);
    return `${this.host}/data/${path}/${id}.json`;
  }
});
