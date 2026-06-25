class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for char in s:
            print(stack)
            match char:
                case "]":
                    if len(stack) == 0:
                        return False
                    if stack.pop() != "[":
                        return False
                case ")":
                    if len(stack) == 0:
                        return False
                    if stack.pop() != "(":
                        return False
                case "}":
                    if len(stack) == 0:
                        return False
                    if stack.pop() != "{":
                        return False
                case _:
                    stack.append(char)


                
        return len(stack) == 0