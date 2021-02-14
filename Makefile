####################
# Makefile
####################

ENV:=GOOS=linux GOARCH=amd64 CGO_ENABLED=0
EXECUTABLE:=jija
TODAY=`date +"%Y-%m-%d"`

$(EXECUTABLE):
	go build ${LDFLAGS} -o ${EXECUTABLE} server.go

$(EXECUTABLE)-linux:
	env ${ENV} go build ${LDFLAGS} -o ${EXECUTABLE}-linux server.go

generate:
	gqlgen generate

clean:
	rm -f ${EXECUTABLE}*

deploy:
	scp  ${EXECUTABLE} 42do:/opt/jija/${TODAY}_${EXECUTABLE}


build: generate
	make clean ${EXECUTABLE}

#################
# Serve
#################
serve: generate
	go run server.go