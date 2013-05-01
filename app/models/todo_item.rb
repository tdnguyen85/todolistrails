class TodoItem < ActiveRecord::Base
  attr_accessible :completed, :deleted, :title
  belongs_to :todo_list
end
