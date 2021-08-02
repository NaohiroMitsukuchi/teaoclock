json.array! @drop_condition_logs do |drop_condition_log|
  json.id drop_condition_log.id
  json.time drop_condition_log.time
  json.water_quantity drop_condition_log.water_quantity
  json.leaf_quantity drop_condition_log.leaf_quantity
  json.tea_type_id drop_condition_log.tea_type_id
  json.number_of_people drop_condition_log.number_of_people
  json.temperature drop_condition_log.temperature
end