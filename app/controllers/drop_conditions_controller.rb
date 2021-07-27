class DropConditionsController < ApplicationController

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  private
  def drop_condition_params
    params.require(:drop_condition).permit(:time, :tea_type_id, :number_of_people, :temperature, :note, :evalution, :my_tea_id).merge(user_id: current_user.id)
  end
end

