import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('products_api_amaro', function (table) {
    table.string('id', 64).notNullable()
    table.string('name', 64).notNullable()
    table.decimal('value', 4, 2).notNullable()
    table.string('description', 255).notNullable()
    table.string('type', 64).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('products_amaro')
}

exports.config = { transaction: false }
