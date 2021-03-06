class MyTea < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :leaf_type
  has_many :my_tea_images, dependent: :destroy
  accepts_nested_attributes_for :my_tea_images, allow_destroy: true
  validates_associated :my_tea_images
  belongs_to :leaf_type
  belongs_to :user
  has_many :drop_conditions, dependent: :destroy

  with_options presence: true do
    validates :product_name
    validates :leaf_type_id
    validates :user_id
  end
end
