class Api::BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]
  
  def index
    render json: Book.all
  end

  def show
    render json: @book
  end

  def create
    book = Book.new(book_params)

    if book.save
      render json: book
    else
      render json: { errors: @api_book.errors.full_messages.join(',') }, status: 442
    end
  end

  def update
    if @product.update(product_params)
      render json: @book
    else
      render json: @book.errors, status: 442
    end
  end

  def destroy
    @book.destroy
  end

  private

  def set_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author, :blurb, :difficulty, :keywords, :lessons)
  end
end
