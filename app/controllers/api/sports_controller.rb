class Api::SportsController < ApplicationController
include HTTParty

def index
    @sports = HTTParty.get("https://www.thesportsdb.com/api/v1/json/1/all_sports.php")
    render json: @sports
end

end
