/*
  Warnings:

  - Added the required column `age` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `player` ADD COLUMN `age` INTEGER NOT NULL;
