USE MASTER
GO

IF NOT EXISTS (
	SELECT [name]
	FROM sys.databases
	WHERE [name] = 'GameCorner'
)
CREATE DATABASE GameCorner
GO

USE GameCorner
GO

DROP TABLE IF EXISTS Platforms;
DROP TABLE IF EXISTS Games;
DROP TABLE IF EXISTS [User];


CREATE TABLE Platforms (
id int not null identity primary key,
[name] varchar (255),
);

CREATE TABLE Games (
	id int not null identity primary key,
	title varchar (255),
	userId varchar (255),
	rating int not null,
	platformId int not null,
);

CREATE TABLE [User] (
	id varchar (255) not null primary key,
	firstName varchar (255),
	lastName varchar (255),
	email varchar (255),
);


INSERT INTO Platforms ([name]) 
	VALUES ('XBox');

INSERT INTO Platforms ([name]) 
	VALUES ('Playstation');

INSERT INTO Platforms ([name]) 
	VALUES ('PC');

INSERT INTO Platforms ([name]) 
	VALUES ('Nintendo');


INSERT INTO Games (title, userId, rating, platformId)
	VALUES ('Ark', '2', 8, 3);

INSERT INTO Games (title, userId, rating, platformId)
	VALUES ('Destiny', 'UOhIdhsXIhaD1kkvi4bWNQdCNjN2', 7, 3);

INSERT INTO Games (title, userId, rating, platformId)
	VALUES ('Rocket League', 'UOhIdhsXIhaD1kkvi4bWNQdCNjN2', 10, 1);

INSERT INTO Games (title, userId, rating, platformId)
	VALUES ('Civilization', 'UOhIdhsXIhaD1kkvi4bWNQdCNjN2', 8, 3);


INSERT INTO [User] (id, firstName, lastName, email)
	VALUES ('1', 'Joe', 'Gibbs', 'joseph.gibbs1188@gmail.com');


select * from Platforms
select * from Games
select * from [User]
