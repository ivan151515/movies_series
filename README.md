1. npm install
2. create .env file in the root of the project and insert credentials for variables provided in .env.example
3. make sure postgres is installed and running locally and that there is a database with the same name as in .env POSTGRES_DB
4. npm run make-migration
5. copy from migration.example.js to the file created in db/migrations
6. npm run migration
7. npm run dev
8. open localhost:${process.env.PORT}/api-docs
