import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('products_api_amaro', function (table) {
    table.uuid('id').primary().defaultTo(knex.raw('(UUID())'))
    table.string('name', 64).notNullable()
    table.decimal('value', 8, 2).notNullable()
    table.string('description', 255).notNullable()
    table.string('type', 64).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('products_api_amaro')
}

exports.config = { transaction: false }
