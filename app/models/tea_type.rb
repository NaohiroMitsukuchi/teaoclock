class TeaType < ActiveHash::Base
  self.data = [
    {id: 1, name: "ストレート"},
    {id: 2, name: "アイス"},
    {id: 3, name: "ミルク"},
    {id: 4, name: "ソーダ"}
  ]
end
