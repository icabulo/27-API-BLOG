-- CreateTable
CREATE TABLE `comments` (
    `idcomment` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(500) NOT NULL,
    `posts_idpost` INTEGER NOT NULL,

    UNIQUE INDEX `idcomments_UNIQUE`(`idcomment`),
    INDEX `fk_comments_blog_idx`(`posts_idpost`),
    PRIMARY KEY (`idcomment`, `posts_idpost`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `posts` (
    `idpost` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `content` VARCHAR(1000) NOT NULL,

    UNIQUE INDEX `idblog_UNIQUE`(`idpost`),
    PRIMARY KEY (`idpost`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `fk_comments_blog` FOREIGN KEY (`posts_idpost`) REFERENCES `posts`(`idpost`) ON DELETE NO ACTION ON UPDATE NO ACTION;
