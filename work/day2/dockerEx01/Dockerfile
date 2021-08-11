FROM node:14
# 이미지 받아오기

RUN apt-get update && \
# 개행은 &&로 해줘야 함
apt-get install -y vim nano net-tools openssh-server
# net-tools : ip주소 등 받아오는 툴
# openssh-server : ssh접속을 할 수 있도록



# docker build . -t study/hello-node:step1 : 이미지 생성
# -t : 도커 이미지에 이름:태그를 지정하겠다.

# docker image rm study/hello-node:step1 : 이미지 지우기
# docker rmi study/hello-node:step1 : 이미지 지우기
# docker image rm imageID: 이미지 지우기
# docker rmi imageID : 이미지 지우기


# create : container를 만드는 단계
# docker create -it --name doc-node-test study/hello-node:step1
# -it : interactive(실행시키고 쉘로 접속하겠다) tty(teletypewriter: 터미널로 하겠당)
# doc-node-test : 컨테이너 이름
# 나머지는 도커 이미지 이름:태그

# docker ps : 컨테이너 리스트 보기 (아마 전원이 들어와있는거만 보임?)
# docker ps -a : 모든 컨테이너 리스트 보기

# docker start CONTAINER ID : 도커 시작
# docker exec -it df8291fbf383 bash : 도커에서 배쉬 실행 
# apt-get update : 리눅스 설치 업데이트
# apt-get install vim : vim 편집기 설치
# apt-get install nano : nano 편집기 설치
# exit : 도커 컨테이너 나감
# docker stop CONTAINER ID : 도커를 멈춤 (ps하면 안보임, ps -a하면 보임)

# ***도커에서 배쉬 실행***
# -it : 도커 배쉬에서 일어나는 일을 인터렉션으로 받아오겠다
# -d : 도커 배쉬에서 일어나는 일을 백그라운드로 실행시키겠다
# -w 경로 : 도커의 워크 디렉토리 경로를 기본(루트)에서 바꿀 때 사용
# ->응용 : docker exec -d -w /home/work/nodeJsStudy 6007abaf917c(도커컨테이너아이디) 명령어
# ㄴ> : docker exec -d -w /home/work/nodeJsStudy 6007abaf917c node testServer.js :: 백그라운드에서 도커 내부 서버를 실행시킨다.
#       서버가 열린 상태로 curl 등 명령어를 사용해 서버 접속 테스트

# ***root 패스워드 지정***
# passwd root
# 비밀번호 입력.(6007abaf917c : 1234)


# ***docker 포트 포워딩***

# create -p 8080:8080 -p 8022:22

# openssh-server -> etc/ssh/sshd_config -> PermitionLogin yes
# service ssh start (bash에서 실행)

# ***ssh 접속***
# ssh root@localhost -p 8022 (로컬)

# ㄴ> vscode : remote ssh 설치-> 원격탐색기 설정추가 :
#Host docker_ssh
#    HostName localhost
#    User root
#    Port 8022

# curl -i -X GET http://192.168.1.106:8080
# -i : header(정보)를 출력
# -X : method 지정(GET/POST)
# 맨 뒤에 uri 지정 (uri : http(스키마)를 포함한 전체 !요청 문장!)
# 웹 브라우저 실행 없이 서버 구동을 확인할 수 있음
# 파일 받을 때에는 curl 말고 wget을 많이 씀!!!

# 도커 생성 + 실행 명령어
# docker run --name db_mongo -d -p 27017:27017 -v D:\Study\work\database:/data/db mongo:latest
# -d : 
# -p : 몽고디비 디폴트 포드번호 27017
# -v : 볼륨 설정 (상대경로 안됨. ㅜㅜ) 내 경로:가상머신 마운팅

# ***docker - mongoDB 이미지 생성***
# docker pull mongo:version(생략하면 최신버전)
# 몽고 컨테이너 실행 후 mongo 하면 DB 켜짐

# ***mongo shell***
# mongo compass -> GUI
# mongosh -> commend line(CLI)


# *****원격으로 도커 안의 워크스페이스 접속하려면 *****
# docker exec -it containerId bash
# service ssh start
# 원격 접속