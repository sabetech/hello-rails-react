class Api::V1::MessagesController < ApplicationController
  def index
    messages = Message.all.sample
    if messages
      render json: messages
    else
      render json: messages.errors, status: :bad_request
    end
  end
end
