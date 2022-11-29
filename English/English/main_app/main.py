class Main:
    def main(self, answer_1, answer_2, answer_3):
        templates = self.return_templates()
        return templates

    def return_templates(self) -> list[dict[str, str]]:
        info_1 = "Abot achievemnt 1"
        info_2 = "Abot achievemnt 2"
        info_3 = "Abot achievemnt 3"

        achievemnt_1 = {
                "title": "Achievemnt 1", 
                "info": info_1, 
                "url": "static/img/rainbow.jpg"
                }

        achievemnt_2 = {
                "title": "Achievemnt 2", 
                "info": info_2, 
                "url": "static/img/bright.jpg"
                }

        achievemnt_3 = {
                "title": "Achievemnt 3", 
                "info": info_3, 
                "url": "static/img/purple_people.jpg"
                }


        templates = [achievemnt_1, achievemnt_2, achievemnt_3]
        return templates

