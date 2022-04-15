import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('products_amaro', function (table) {
    table.increments('id')
    table.string('name', 255).notNullable()
    table.decimal('value', 65).notNullable()
    table.string('description', 255).notNullable()
    table.string('type', 255).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('products_amaro')
}

exports.config = { transaction: false }
