class TeaType < ActiveHash::Base
  self.data = [
    {id: 1, name: "ティーバッグ"},
    {id: 2, name: "リーフティー"},
    {id: 3, name: "アイス"},
    {id: 4, name: "ミルク"},
    {id: 5, name: "ソーダ"}
  ]
end
