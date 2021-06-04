class Video < ApplicationRecord
    validates :uploader_id, :view_count, :title, presence: true

    belongs_to :uploader,
        foreign_key: :uploader_id,
        class_name: :User


end
