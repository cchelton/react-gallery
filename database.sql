--create database named react_gallery_app

--create table named galleryItems
CREATE TABLE "galleryItems" (
	"id" SERIAL PRIMARY KEY,
	"path" varchar(256) NOT NULL,
	"description" varchar(1000),
	"likes" integer NOT NULL
);
