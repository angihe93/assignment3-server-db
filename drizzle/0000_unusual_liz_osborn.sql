CREATE TABLE "connect4_games" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"currentPlayer" varchar(255) NOT NULL,
	"grid" jsonb NOT NULL,
	"result" varchar(255)
);
