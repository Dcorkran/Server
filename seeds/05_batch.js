exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "batch"; ALTER SEQUENCE batch_id_seq RESTART WITH 1')
  // .then(()=>{
  //   return Promise.all([
  //     knex("batch").insert([{
  //       id:1,
  //       'created_date':'2016-02-14 12:00:00',
  //       'parent_child_id': 1
  //     },{
  //       id:2,
  //       'created_date':'2016-02-14 12:00:00',
  //       'parent_child_id': 2
  //     }])
  //   ]);
  // });
};
