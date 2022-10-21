CREATE TABLE "cakes"(
    "id" serial NOT NULL PRIMARY KEY,
    "name" VARCHAR(255) UNIQUE NOT NULL,
    "price" NUMERIC NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL
);

CREATE TABLE "clients"(
    "id" serial NOT NULL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL
);

CREATE TABLE "orders"(
    "id" serial NOT NULL PRIMARY KEY,
    "clientId" INTEGER NOT NULL REFERENCES "clients"("id"),
    "cakeId" INTEGER NOT NULL REFERENCES "cakes"("id"),
    "quantity" INTEGER NOT NULL,
    "createdAt" timestamp NOT NULL DEFAULT NOW(),
    "totalPrice" NUMERIC NOT NULL
);