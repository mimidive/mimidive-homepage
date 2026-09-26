CREATE TABLE `safety_waivers` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(191) NOT NULL,
  `phone` VARCHAR(191) NOT NULL,
  `emergency_contact` VARCHAR(191) NOT NULL,
  `agreed` BOOLEAN NOT NULL DEFAULT false,
  `signature_data_url` LONGTEXT NOT NULL,
  `email_sent` BOOLEAN NOT NULL DEFAULT false,
  `email_error` TEXT NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
