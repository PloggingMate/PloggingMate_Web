Insert into PARK values (1,'2021-09-21 19:35:22.662245', '2021-09-21 19:35:22.662245' ,'서울 종로구 낙산길 41','낙산공원', 4.8, 'VALID','testURL');
Insert into PARK values (2,'2021-09-21 19:35:22.662245', '2021-09-21 19:35:22.662245' ,'서울 동작구 여의대방로20길 33','보라매공원', 4.9, 'VALID','testURL');
Insert into PARK values (3,'2021-09-21 19:35:22.662245', '2021-09-21 19:35:22.662245' ,'서울 동작구 사당로23길 93 삼일(3~1)공원','삼일공원', 4.9, 'VALID','testURL');

Insert into ACCOUNT values (1, '2021-09-24 16:46:13.94785', '2021-09-24 16:46:13.94785', '서울특별시 사당로 20나길 19 201호', 'vividswan@naver.com', 'vividswan', 0, '{bcrypt}$2a$10$kFOLpB0SNJpI1Umvufq22u.81OVCMydSte2IzXuHkzlhJowLi/cQ6',	null,	'ROLE_USER', 'VALID');

Insert into POST values (1,'2021-09-21 19:35:22.662245', '2021-09-21 19:35:22.662245' , '서울 종로구 낙산길 41',0,'같이 산책해요!', '낙산공원','2021-10-21 19:35:22.662245', 'VALID',5,1,1);
Insert into POST values (2,'2021-09-21 19:35:22.662245', '2021-09-21 19:35:22.662245' , '서울 종로구 낙산길 41',0,'산책 좋아요!','낙산공원', '2021-10-19 19:35:22.662245', 'VALID',5,1,1);
Insert into POST values (3,'2021-09-21 19:35:22.662245', '2021-09-21 19:35:22.662245' , '서울 동작구 여의대방로20길 33',0,'보라매 공원에서 산책 좋아요!', '보라매공원','2021-10-15 19:35:22.662245', 'VALID',0,1,2);
Insert into POST values (4,'2021-09-21 19:35:22.662245', '2021-09-21 19:35:22.662245' , '서울 동작구 여의대방로20길 33',0,'지난 기간!','보라매공원', '2011-10-15 19:35:22.662245', 'VALID',5,1,2);