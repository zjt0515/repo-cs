#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
#include <stdlib.h>
int main(void)
{
  pid_t pid;
  int data = 5;
  if ((pid = fork()) < 0)
  {
    printf("fork error\n");
    exit(0);
  }
  else if (pid == 0)
  {
    data--;
    printf("child\'s data is:%d\n", data);
    exit(0);
  }
  else
  {
    printf("parent\'s data is:%d\n", data);
  }
  exit(0);
}