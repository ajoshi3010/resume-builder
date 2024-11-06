/*
  Warnings:

  - Added the required column `previewImage` to the `ResumeTemplate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ResumeTemplate" ADD COLUMN     "previewImage" TEXT NOT NULL;
