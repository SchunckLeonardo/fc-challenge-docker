FROM golang:1.22 AS builder

WORKDIR /usr/src/app

COPY . .

RUN go build main.go

FROM scratch

WORKDIR /fullcycle

COPY --from=builder /usr/src/app/main .

ENTRYPOINT ["./main"]