# Udacity_Full_Stack_JavaScript_Developer_Project_02_Build_A_Storefront_Backend
Udacity Full Stack JavaScript Developer Project 02 Build A Storefront Backend


# PostgreSQL

```
docker pull postgres

docker run -d \
	-p 5432:5432 \
	--name postgres \
	-e POSTGRES_PASSWORD=postgres \
	postgres

create database fantasy_worlds_dev;
create user dev_user with encrypted password 'password123';
grant all privileges on database fantasy_worlds_dev to dev_user;


create database fantasy_worlds_test;
create user test_user with encrypted password 'password123';
grant all privileges on database fantasy_worlds_test to test_user;
```


```
npm install

npm run dev
```