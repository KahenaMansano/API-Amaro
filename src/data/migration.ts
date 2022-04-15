import { BaseDatabase } from './BaseDatabase'

const createTable: any = () => {
  return BaseDatabase.raw(
    `
CREATE TABLE IF NOT EXISTS products_amaro (
  id VARCHAR(64) PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  value DECIMAL(2,2) NOT NULL,
  description VARCHAR(64) NOT NULL,
  type VARCHAR(64) NOT NULL
);
`
  )
}

createTable()
  .then(() => {
    console.log('Tabela criada!')
  })
  .catch((error: any) => {
    throw new Error(error.sqlMessage || error.message)
  })
  .finally(() => {
    BaseDatabase.destroy()
  })
