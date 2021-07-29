class DropConditionsController < ApplicationController

  def new
    @drop_condition = DropCondition.new
  end

  def create
    @drop_condition = DropCondition.new(drop_condition_params)
    if @drop_condition
      redirect_to my_teas_path
    else
      render :new
    end
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

