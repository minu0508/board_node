var express = require('express');
var router = express.Router();

const controller = require('./controllers');

router.post('/', controller.writePost);

/* 목록 */
router.get('/', controller.selectAllPosts);

/* 상세보기 */
router.get('/blog/:uid', controller.selectPostDetail);

/* 추가 */
router.post('/', controller.writePost);

/* 추가 페이지 */
router.get('/write', controller.writePage);

/* 수정 */
router.patch('/:uid', controller.modifyPost);

/* 수정 페이지 */
router.get('/modify/:uid', controller.modifyPage);

/* 삭제 */
router.delete('/:uid', controller.deletePost);

module.exports = router;