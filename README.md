# Alearning-project

## วิธี demo in dev mode

1. สั่ง run container ด้วยคำสั่ง 
```
docker compose up --build -d
```

2. เข้าไป init database ผ่าน adonisjs container 
```
docker exec -it adonisjs sh -c "cd apps/alearning-backend; node ace migration:fresh --seed;"
```

3. เข้า demo ผ่าน url: http://localhost:5173

## วิธี deploy

1. สั่ง run container ด้วยคำสั่ง 
```
docker compose -f .\docker-compose-prod.yaml up --build -d
```
2. init database (ทำครั้งเดียว)
```
docker exec -it alearning-be sh -c "cd apps/alearning-backend/build; node ace migration:fresh --seed;"
```
