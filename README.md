# tea o'clock_データベース設計

## Usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
|password_confirmation|string|null: false|
### Association
- has_many :my_teas, dependent: :destroy
- has_many :favorites, dependent: :destroy
- has_many :drop_condition_logs, through :favorites


## MyTeasテーブル
|Column|Type|Options|
|------|----|-------|
|product_name|string|null: false|
|campany|string||
|tea_type|references|null: false|
|origin|string||
|flavor|string||
|user|references|null: false, foreign_key: true|
### Association
- has_many :my_tea_images, 
- belongs_to :tea_type
- belongs_to :user
- has_many :drop_condition_logs, dependant :destroy

## MyTeaImagesテーブル
|Column|Type|Options|
|------|----|-------|
|url|text|null: false|
|my_tea|references|foreign_key: true|
### Association
- belongs_to :my_tea

## DropConditionLogsテーブル
|Column|Type|Options|
|------|----|-------|
|time|integer|null: false|
|quantity|string|null: false|
|temperature|string|null: false|
|note|string|null: false|
|my_tea|references|null: false, foreign_key: true|
### Association
- belongs_to :my_tea
- belongs_to :user
- has_one :favorite

## favoritesテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|drop_condition_log|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_one :drop_condition_log


## Teatypesテーブル
|Column|Type|Options|
|------|----|-------|
|type|string|null: false|
### Association
- has_many :myteas
