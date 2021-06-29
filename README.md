# tea o'clock_データベース設計

## Usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|password|string|null: false|
|password_confirmation|string|null: false|
### Association
- has_many :myteas, dependent: :destroy

## MyTeasテーブル
|Column|Type|Options|
|------|----|-------|
|product_name|string|null: false|
|campany|string||
|origin|references|foreign_key: true|
|flavor|references|foreign_key: true|
|time|string|null: false|
|quantity|string|null: false|
|temperature|string|null: false|
|leaf_type|references|null: false|
|astringency|references|null: false|
|image_url|string||
|note|string|null: false|
|user|references|null: false, foreign_key: true|
### Association
- belongs_to :flavor
- belongs_to :leaftype
- belongs_to :astringency
- belongs_to :user
- belongs_to :origin

## Flavorsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :myteas

## Leaftypesテーブル
|Column|Type|Options|
|------|----|-------|
|type|string|null: false|
### Association
- has_many :myteas

## Astringencyテーブル
|Column|Type|Options|
|------|----|-------|
|degree|string|null: false|
### Association
- has_many :myteas

## Originsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|country|references|null: false|
|image_url|string||
### Association
- has_many :myteas
- belongs_to :country


## Countriesテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :origins