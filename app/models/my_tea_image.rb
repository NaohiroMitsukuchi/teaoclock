class MyTeaImage < ApplicationRecord
  belongs_to :my_tea
  mount_uploader :url, ImageUploader
end
