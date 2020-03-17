


## How to run <br>
```
composer install
npm install
php artisan migrate
npm run prod


The application uses Vuejs for the frontend.In order for it to work it has to be in a subfolder called 'new'.
For example if you are using xampp copy the 'new' folder into the htdocs and it should work.
There are two ways of importing the database: php artisan migrate or use the new.sql file that's saved in the database folder.
The name of the database should also be 'new' (without quotes).
Using the build it php web server ( php -S localhost:8080) doesn't work.
```