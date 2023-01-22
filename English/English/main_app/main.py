class Main:
    def main(self, answer_1, answer_2, answer_3):
        templates = self.return_templates()
        return templates

    def return_templates(self) -> list[dict[str, str]]:
        info_1 = "It is important not only to constantly engage in the development of hyperfocus, but also to reward yourself with rest. After completing an important task with hyperfocusing, reward yourself with rest. Spend time with friends, do your favorite things after completing a difficult task for you so that in the future you will want to focus more and more on tasks, and then reward yourself with rest"
        info_2 = "Distributing things, hobbies and routine correctly is very important in our time, when forever instead of doing business, we prefer to spend an extra hour in social networks. We can advise you: Make plans for a certain amount of time. This will help you move towards your ambitious and not very goals. Think over the plan for the day, decide on the order of actions that you must perform. Thanks to the order of actions, you will be able to perform tasks in order and this will help you not to shirk from a particular boring routine."
        info_3 = "Our mental health and productivity very much depends on the physical condition, so every day your sleep should be at least 7 hours, insufficient or excessive sleep will only harm you and your health, you will feel tired and sluggish all day. As well as observing proper nutrition (fiber, protein, fats and carbohydrates in the correct proportions selected for you) will help you feel better, as a result of which your energy will be enough for any task"

        achievemnt_1 = {
                "title": "REWARD YOURSELF WITH REST", 
                "info": info_1, 
                "url": "static/img/blue.jpg"
                }

        achievemnt_2 = {
                "title": "TIME MANAGEMENT", 
                "info": info_2, 
                "url": "static/img/hands.jpg"
                }

        achievemnt_3 = {
                "title": "SLEEP AND POWER MODE", 
                "info": info_3, 
                "url": "static/img/face.jpg"
                }


        templates = [achievemnt_1, achievemnt_2, achievemnt_3]
        return templates

