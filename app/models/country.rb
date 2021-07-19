class Country < ActiveHash::Base
  self.data = [
    {id: 1, name: "hoge"},
    {id: 2, name: "hoge1"},
    {id: 3, name: "hoge2"}
  ]
end
