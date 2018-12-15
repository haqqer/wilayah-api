WILAYAH API
===================
### HOW TO USE
Untuk melihat daftar provinsi 

``` GET /provinsi ```

Filter provinsi

```GET /provinsi?id=11```

```GET /provinsi?name=ACEH```

Untuk melihat daftar kabupaten

``` GET /kabupaten ```

Filter kabupaten

```GET /kabupaten?id=3325```

```GET /kabupaten?province_id=33```

```GET /kabupaten?name=KABUPATEN BATANG```

Untuk melihat daftar kecamatan

``` GET /kecamatan ```

Filter kecamatan

```GET /kecamatan?id=3325```

```GET /kecamatan?name=WARUNG ASEM```

### Cara penginstalan :
1. Pertama clone atau fork repository ini
2. ```git clone https://github.com/haqqer/wilayah-api```
3. Kemudian ```cd wilayah-api```
4. Jalankan, ```yarn install``` atau ```npm install```
5. ```yarn run dev``` atau ```npm run dev``` 