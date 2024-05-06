/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("or0w9m8ys9g0stv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dn39egdb",
    "name": "fractional_investment",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("or0w9m8ys9g0stv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dn39egdb",
    "name": "fractional_invertment",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
